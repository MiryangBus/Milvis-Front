function ExplainTrainOption({title, explain, id}) {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <p className="small-explain">{explain}</p>
    </>
  )
}

export default ExplainTrainOption