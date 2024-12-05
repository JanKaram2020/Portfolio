import FullWidthColumn from "../components/FullWidthColumn";
import SectionHeading from "../components/SectionHeading";
import { Summary1, Summary2 } from "../data";
import TimeSince from "../components/TimeSince";

const SummarySection = () => (
  <FullWidthColumn>
    <SectionHeading id={"aboutMe"}>Summary</SectionHeading>
    <section>
      <p className="text-sm print:tracking-tighter print:leading-none">
        {Summary1} <TimeSince date={"2021-08-01"} /> {Summary2}
      </p>
    </section>
  </FullWidthColumn>
);

export default SummarySection;
