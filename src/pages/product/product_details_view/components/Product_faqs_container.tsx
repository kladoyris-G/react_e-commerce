import type { FAQs } from "@models/FAQs/FAQs";

type ProductFAQsContainerProps =
    {
        fqas: FAQs[];
    }

const ProductFAQsContainer: React.FC<ProductFAQsContainerProps> = ({ fqas }) => {
    return <>
        {fqas?.map((fqa) => (
            <div className="card p-4 my-2">

                <p className="fw-bold">{fqa.question}</p>
                <p className="">{fqa.answer}</p>

            </div>
        ))}
    </>
}

export default ProductFAQsContainer;