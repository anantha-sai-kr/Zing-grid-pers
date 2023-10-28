import './App.css';
import 'zinggrid';


function App() {
  const data = [
    { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>`,"count": 1, "val": 50 },
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian","count": 1, "val": 50 },
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund","count": 1, "val": 50 },
    { "name": "Plop", "breed": `<h2>Corgi</h2>`,"count": 1, "val": 50 },
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund","count": 1, "val": 50 },
    { "name": "Plop", "breed": `<h2>Corgi</h2>`,"count": 1, "val": 50 },
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund","count": 1, "val": 50 },
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
        { "name": `<h2>Sousage</h2>`, "breed": "Dachshund" ,"count": 1, "val": 50},
    { "name": "Plop", "breed": `<h2>Corgi</h2>` ,"count": 1, "val": 50},
    { "name": `<h2>Floof<h2>`, "breed": "Pomeranian" ,"count": 1, "val": 50},
  ]

  return (
    <div className='page'>
        <div className='table'>
        <zing-grid
          zebra
          data={JSON.stringify(data)}
          gridlines={""}
        >
            <zg-colgroup>
              <zg-column key="count" index="count" filter="disabled" type="row-group" />
            <zg-column
              key="val"
              header="name"
              index="val"
              filter="disabled"
              type="number"
              group-head-cell="avg"
            />
            <zg-column
              key="breed"
              header="breed"
              index="breed"
              filter="disabled"
            />

          </zg-colgroup>
          </zing-grid>
          </div>
      </div>
  )
}

export default App;