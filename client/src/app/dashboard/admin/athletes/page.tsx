import axios from "axios";
import AthletesTable from "../../../../components/Table/usersTable/AthletesTable";

const getData = async () => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/sporif/`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function Athletes() {
  const athletes = await getData();
  return (
    <div className="mx-5">
      {athletes && <AthletesTable athletes={athletes.data.sportifs} />}{" "}
    </div>
  );
}
