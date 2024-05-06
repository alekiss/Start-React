import "./styles.css"

const DisplayList = () => {

    const times = [
        "America-MG",
        "Athletico",
        "Atlético-GO",
        "Atlético-MG",
        "Avaí",
        "Botafogo",
        "Bragantino",
        "Ceará",
        "Corinthians",
        "Coritiba",
        "Cuiabá",
        "Flamengo",
        "Fluminense",
        "Fortaleza",
        "Goiás",
        "Internacional",
        "Juventude",
        "Palmeiras",
        "Santos",
        "São Paulo"
    ]

  return (
    <>
    <div className="display-list">
        <h1>Brasileirão Série A</h1>
        <ul>
            {times.map((item) => {
                return(<li key={item}>{item}</li>)
            })}
        </ul>
    </div>
    </>
  )
}

export default DisplayList