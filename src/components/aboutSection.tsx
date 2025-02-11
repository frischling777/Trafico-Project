type AboutSectionProps = {
    h2: string,

}

export function AboutSection(props: AboutSectionProps) {
    return (
        <section>
            <h2>
                {props.h2}
            </h2>
            <div className="grid">
                <ClientCard info="Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee." img="" clientName="Isak Pettersson"/>
                <ClientCard info="From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan. " img="" clientName="Simon Sandberg"/>
                <ClientCard info="An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct" img="" clientName="Isak Pettersson"/>
            </div>
        </section>
    )
}

type ClientCardProps = {
    info: string,
    img: string,
    clientName: string
}

function ClientCard(props: ClientCardProps) {
    return(
        <div>
            <p>{props.info}</p>
            <div>
                <img src={props.img}/>
                <p>{props.clientName}</p>
            </div>
        </div>
    )
}