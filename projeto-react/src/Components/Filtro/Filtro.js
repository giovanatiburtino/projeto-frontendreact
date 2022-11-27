import { FiltroContainer, Filtros } from "./style";

function Filtro(props) {
  const onChangeMinPrice = (e) => {
    props.setMinPrice(e.target.value);
  };

  const onChangeMaxPrice = (e) => {
    props.setMaxPrice(e.target.value);
  };

  return (
    <FiltroContainer>
      <Filtros>
        <h3>Filtros</h3>
        <div className="filtro-min">
          <label>
            <p>Valor Mínimo:</p>
            <input
              type="number"
              value={props.minPrice}
              onChange={onChangeMinPrice}
            />
          </label>
        </div>

        <div className="filtro-max">
          <label>
            <p>Valor Máximo:</p>
            <input
              type="number"
              value={props.maxPrice}
              onChange={onChangeMaxPrice}
            />
          </label>
        </div>
      </Filtros>
    </FiltroContainer>
  );
}

export default Filtro;