import { faqs } from "../../assets/data/faqs";
import FaqItem from "./FaqItem";

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((faq, index) => (
        <FaqItem faq={faq} key={index} />
      ))}
    </ul>
  );
};

export default FaqList;
