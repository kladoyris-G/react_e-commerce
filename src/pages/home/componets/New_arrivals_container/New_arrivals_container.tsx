import styles from "./New_arrivals_container.module.css";
import { useGetNewArrivalsQuery } from "../../../../services/server_api/Product_api";

const NewArrivalsContainer: React.FC = () => {
  const {
    data: products,
    error,
    isError,
    isLoading,
  } = useGetNewArrivalsQuery();

  console.log("New Arrivals response:", products);

  if (isLoading) return <p>Loading new arrivals...</p>;

  if (isError) {
    console.log("Error:", isError);

    const err = error as { status?: number; message?: string };
    return (
      <p style={{ color: "red" }}>
        Error {err?.status}: {err?.message}
      </p>
    );
  }

  return (
    <div className="mainContentWrapper my-5">
      <h1 className={styles.title}>NEW ARRIVALS</h1>
      <ul>
        {products?.map((p) => (
          <li key={p.id}>
            {p.title} – {p.formattedPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewArrivalsContainer;
