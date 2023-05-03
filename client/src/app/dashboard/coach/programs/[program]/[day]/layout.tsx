import axios from "axios";
import ProgramHeader from "../../../../../../components/programHeader/ProgramHeader";

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
  const programId = params.program;

  const programData = await getData(programId);

  return (
    <div className="m-5">
      {programData && (
        <ProgramHeader
          days={programData.data.programme.duree}
          selectedDay={params.day}
          program={params.program}
        />
      )}
      {children}
    </div>
  );
}
