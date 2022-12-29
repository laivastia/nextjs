import { useRouter } from "next/router";

export default function Person({ result }) {
  console.log(result);
  const router = useRouter();
  console.log(router.query.image);
  const img = router.query.image;

  return (
    <div>
      <img src={img} />
      <h2>{result.id}</h2>
      <h3>netWorth: {`${Math.round(result.netWorth / 1000)} Billion`}</h3>
      <h3>{`industry: ${result.industries[0]}`}</h3>
      <pre>
        {result.bio.map((value, index) => {
          return <p key={index}>{value}</p>;
        })}
      </pre>
      <div className="assets">
        {result.financialAssets.map((value, index) => {
          return (
            <pre key={index}>
              <pre>{`Ticker: ${value?.ticker}`}</pre>
              <pre>{`Shares: ${value?.numberOfShares}`}</pre>
              <pre>{`Price: ${value?.exerciseOptionPrice}`}</pre>
            </pre>
          );
        })}
      </div>
      <style jsx>{`
        .assets {
          display: flex;
          flex-wrap: no-wrap;
        }
        .assets > pre {
          padding: 10px;
          margin: 0 auto;
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps({ params: { id } }) {
  // console.log(ctx);
  const result = await (
    await fetch(`http://localhost:3000/api/person/${id}`)
  ).json();

  console.log(result);
  return {
    props: {
      result,
    },
  };
}
