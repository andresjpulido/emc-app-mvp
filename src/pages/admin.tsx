import users_data from "../users.json";
import companies_data from "../companies.json";
import plans_data from "../plan.json";
import survey_data from "../survey.json";
import survey_answers_data from "../survey-answers.json";

import "./admin.css";

export default function Admin() {
  const users = users_data.map((user) => {
    return (
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.company_id}</td>
        <td>{user.nickname}</td>
        <td>{user.password}</td>
        <td>{user.plan}</td>
        <td>{user.disabled ? "Inactive" : "Activate"}</td>
        <td>{user.habits.length}</td>
      </tr>
    );
  });

  const companies = companies_data.map((company) => {
    return (
      <tr>
        <td>{company.id}</td>
        <td>{company.name}</td>
      </tr>
    );
  });

  const plans = plans_data.map((plan) => {
    return (
      <tr>
        <td>{plan.title}</td>
        <td>{plan.company}</td>
      </tr>
    );
  });

  const surveys = survey_data.map((question) => {
    return (
      <tr>
        <td>{question.id}</td>
        <td>{question.question}</td>
      </tr>
    );
  });

  const survey_answers = survey_answers_data.map((question) => {
    return (
      <tr>
        <td>{question.id}</td>
        <td>{question.user_id}</td>
        <td>{question.question_id}</td>
        <td>{question.answer}</td>
      </tr>
    );
  });

  return (
    <section className="section-page">
      <h1>Admin console</h1>
      <h2>Users</h2>
      <table className="table-users">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>COMPANY</th>
          <th>NICKNAME</th>
          <th>PASSWORD</th>
          <th>PLAN_ID</th>
          <th>DISABLED</th>
          <th>HABITS</th>
        </tr>
        {users}
      </table>
      <h2>Companies</h2>
      <table className="table-users">
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
        {companies}
      </table>
      <h2>Plans</h2>
      <table className="table-users">
        <tr>
          <th>PLAN</th>
          <th>COMPANY</th>
        </tr>
        {plans}
      </table>
      <h2>Surveys</h2>
      <table className="table-users">
        <tr>
          <th>ID</th>
          <th>QUESTION</th>
        </tr>
        {surveys}
      </table>
      <p>Results:</p>
      <table className="table-users">
        <tr>
          <th>ID</th>
          <th>USER ID</th>
          <th>QUESTION ID</th>
          <th>ANSWER</th>
        </tr>
        {survey_answers}
      </table>
    </section>
  );
}
