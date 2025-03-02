import "./Standing.css";

const Clasificacion = () => {
  const equipos = [
    { posicion: 1, equipo: "Real Madrid", pj: 20, pg: 16, pp: 4, pf: 1768, pc: 1555 },
    { posicion: 2, equipo: "Unicaja", pj: 21, pg: 15, pp: 6, pf: 1864, pc: 1743 },
    { posicion: 3, equipo: "La Laguna Tenerife", pj: 21, pg: 15, pp: 6, pf: 1826, pc: 1724 },
    { posicion: 4, equipo: "Valencia Basket", pj: 21, pg: 15, pp: 6, pf: 2040, pc: 1825 },
    { posicion: 5, equipo: "Joventut Badalona", pj: 21, pg: 12, pp: 9, pf: 1789, pc: 1738 },
    { posicion: 6, equipo: "Baxi Manresa", pj: 21, pg: 12, pp: 9, pf: 1833, pc: 1760 },
    { posicion: 7, equipo: "Barça", pj: 20, pg: 11, pp: 9, pf: 1797, pc: 1725 },
    { posicion: 8, equipo: "Gran Canaria", pj: 20, pg: 11, pp: 9, pf: 1649, pc: 1719 },
    { posicion: 9, equipo: "Baskonia", pj: 21, pg: 10, pp: 11, pf: 1741, pc: 1787 },
    { posicion: 10, equipo: "Casademont Zaragoza", pj: 21, pg: 10, pp: 11, pf: 1885, pc: 1891 },
    { posicion: 11, equipo: "UCAM Murcia", pj: 21, pg: 10, pp: 11, pf: 1727, pc: 1727 },
    { posicion: 12, equipo: "Surne Bilbao", pj: 21, pg: 10, pp: 11, pf: 1743, pc: 1743 },
    { posicion: 13, equipo: "Río Breogán", pj: 21, pg: 9, pp: 12, pf: 1544, pc: 1702 },
    { posicion: 14, equipo: "Morabanc Andorra", pj: 20, pg: 7, pp: 13, pf: 1737, pc: 1813 },
    { posicion: 15, equipo: "ICG Força Lleida", pj: 21, pg: 7, pp: 14, pf: 1744, pc: 1846 },
    { posicion: 16, equipo: "Granada", pj: 21, pg: 6, pp: 15, pf: 1708, pc: 1778 },
    { posicion: 17, equipo: "Bàsquet Girona", pj: 21, pg: 5, pp: 16, pf: 1683, pc: 1864 },
    { posicion: 18, equipo: "Leyma Coruña", pj: 21, pg: 5, pp: 16, pf: 1779, pc: 1952 },
  ];

  return (
    <div className="clasificacion-container">
      <h2>Clasificación ACB 2024/2025</h2>
      <table className="clasificacion-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PP</th>
            <th>PF</th>
            <th>PC</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, index) => (
            <tr key={index}>
              <td>{equipo.posicion}</td>
              <td>{equipo.equipo}</td>
              <td>{equipo.pj}</td>
              <td>{equipo.pg}</td>
              <td>{equipo.pp}</td>
              <td>{equipo.pf}</td>
              <td>{equipo.pc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clasificacion;
