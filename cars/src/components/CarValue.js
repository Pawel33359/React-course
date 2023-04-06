import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    //
    return data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, val) => {
        return acc + val.cost;
      }, 0);
  });

  console.log(totalCost);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
