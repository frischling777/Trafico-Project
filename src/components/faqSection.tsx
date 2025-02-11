type FAQSectionProps = {
    img: string,
    h2: string
}

export function FAQSection(props: FAQSectionProps) {
    return (
        <section>
            <img src={props.img} alt="" />
            <h2>
                FAQ
            </h2>
            <p>
                {props.h2}
            </p>
            <Accordion question='What is a professional traffic permit?' answer='Traffic permits are a requirement for conducting professional traffic'/>
            <Accordion question='How to check the traffic condition?'/>
            <Accordion question='What are the requirements for a professional traffic permit?'/>
            <Accordion question='Are there professional traffic permit training courses at a distance?'/>
            <Accordion question='When is a professional traffic permit needed?'/>
            <Accordion question='Where to look for a traffic permit?'/>
            <Accordion question='Are the differences between a traffic permit and a professional traffic permit?'/>
            <Accordion question='How much does a commercial traffic permit cost for goods?'/>
            <Accordion question='How to plug in for the traffic permit test?'/>
            <Accordion question='How is the sample for a professional traffic permit booked?'/>
        </section>
    )
}

type AccordionProps = {
    question: string,
    answer?: string
}

function Accordion(props: AccordionProps) {
    return (
        <div className='accordion'>
            <h3>{props.question}</h3>
            <p>{props.answer}</p>
        </div>
    )
}