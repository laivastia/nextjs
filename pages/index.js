import Link from "next/link";
import { useRouter } from "next/router";

export default function Index({ result }) {
  const router = useRouter();
  const onClick = ({ id, img }) => {
    router.push(
      {
        pathname: `/person/${id}`,
        query: {
          image: img,
        },
      },
      `/person/${id}`
    );
  };
  console.log(result[0]);
  return (
    <div>
      {result.map((value) => {
        return (
          <div
            key={value.id}
            onClick={() => onClick({ id: value.id, img: value.squareImage })}
          >
            <img src={value.squareImage} />
            <Link href={`/person/${value.id}`}>
              <a>
                <h3>{value.name}</h3>
              </a>
            </Link>
            <h4>{`${Math.round(value.netWorth / 1000)}Billion / ${
              value.industries[0]
            }`}</h4>
          </div>
        );
      })}
    </div>
  );
}
// 사진, 이름, 돈, 회사명
export async function getServerSideProps() {
  const result = await (
    await fetch(`http://localhost:3000/api`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "*",
      },
    })
  ).json();
  return {
    props: {
      result,
    },
  };
}
