import data from "../quotation.json"

export default function Quotation() {
     
    const id = Math.floor(Math.random() * 10)
    const quotation = data[id].content

  return <div>{quotation}</div>;
}
