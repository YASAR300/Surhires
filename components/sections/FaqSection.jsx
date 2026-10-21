import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import { faqs } from '@/data/faqs';

export default function FaqSection() {
  return (
    <Section bg="white" id="faq">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Transparent answers about vetting, candidate privacy, pricing models, and our hiring guarantee."
          alignment="center"
          level="h2"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} type="single" />
        </div>
      </Container>
    </Section>
  );
}
