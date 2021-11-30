import PageWrapper from "../components/Layout/PageWrapper";
import Button from "../components/globals/Button";
import FaqSection from "../components/pages/Home/FaqSection";
export default function Home() {
  return (
    <PageWrapper
      title="Home GDSC-PU"
      description="Homepage GDSC presidency university"
    >
      <h1>HomePage</h1>
			<FaqSection />
    </PageWrapper>
  );
}
