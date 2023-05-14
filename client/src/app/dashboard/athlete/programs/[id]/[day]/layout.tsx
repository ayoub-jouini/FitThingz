import axios from "axios";
import AthleteProgramHeader from "../../../../../../components/program/AthleteProgramHeader";

const getData = async (id: string) => {
  const options = {
    method: "GET",
    url: `${process.env.NEXT_PUBLIC_BACK_URL}/api/programme/id/${id}`,
  };

  let response;
  try {
    response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }

  return response;
};

export default async function programLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const programId = params.id;

  const programData = await getData(programId);

  return (
    <div className="m-5">
      {programData && (
        <AthleteProgramHeader
          day={params.day}
          days={programData.data.programme.duree}
          selectedDay={params.day}
          program={params.id}
          title={programData.data.programme.nom}
          description={programData.data.programme.description}
        />
      )}
      {children}
    </div>
  );
}
