import Image from "next/image";
import Stars from "../molecules/Stars";
import SectionHeader from "@/components/molecules/SectionHeader";
const text1 = (
  <>
    <span className=''>“</span>Him rendered may attended concerns jennings
    reserved now.{" "}
    <span className='font-bold capitalize color-primary'>Sympathize </span>
    did now preference unpleasing mrs few. Mrs for{" "}
    <span className='font-bold capitalize color-primary'>hour game</span> room
    want are fond dare. For detract charmed add talking age. Shy{" "}
    <span className='font-bold capitalize color-primary'>
      resolution instrument
    </span>{" "}
    unreserved man few mr at discretion reasonable. Age out full gate bed day
    lose.”
  </>
);

const text2 = (
  <>
    {" "}
    “Out believe has request not how comfort evident. Up{" "}
    <span className='font-bold capitalize color-primary'>
      delight cousins{" "}
    </span>{" "}
    we feeling minutes. Genius has looked end piqued spring. Down has rose feel
    find man. Learning day desirous informed expenses material returned six the.
    She <span className='font-bold capitalize color-primary'>enabled </span>
    invited exposed him another.{" "}
    <span className='font-bold capitalize color-primary'>
      Reasonably conviction
    </span>{" "}
    solicitude me mr at discretion reasonable. Age out full gate bed day lose.”
  </>
);
const reviews = [
  {
    imageURL: "/images/avatar-1.png",
    name: "Natasha Malik",
    state: "California",
    starsGiven: 5,
    text: text1,
  },
  {
    imageURL: "/images/avatar-2.png",
    name: "AR Shakir",
    state: "Arizona",
    starsGiven: 5,
    text: text2,
  },
];
export default function Testomonials() {
  return (
    <>
      <section className='testomonials container'>
        <SectionHeader
          heading={"Testomonials"}
          subheading={"What They're Saying"}
          headingClassName={"heading-3"}
          containerClassname={"mb-44"}
        >
          {/* TODO fix this accent item */}
          {/* <div className='testomonials__shape relative '>
            <svg
              width='186'
              height='23'
              viewBox='0 0 186 23'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='absolute  top-0 right-1/4 '
            >
              <path
                d='M1.95825 22C16.352 14.9191 117.179 -13.9102 184.944 10.8728'
                stroke='#EA0000'
                stroke-width='2'
                stroke-linecap='round'
              />
            </svg>
          </div> */}
        </SectionHeader>
        {/* bg around53px */}
        <div>
          {/* <h2 className='heading-small--black'>Testomonials</h2>
          <h1 className=' heading-3'>What They're Saying</h1> */}

          <div className='testomonials__body'>
            {reviews.map((review) => {
              return <Testomonial key={review.name} {...review} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Testomonial({ imageURL, name, text, state, starsGiven }) {
  return (
    <div className='testomonials__body-card '>
      <div className='testomonials__body-card-image'>
        <Image
          height={75}
          width={75}
          alt='customer-review avatar'
          src={imageURL}
        />
      </div>
      <div className=' testomonials__body-card-container'>
        <h3 className='testomonials__body-card-container-name'>{name}</h3>
        <h4 className='testomonials__body-card-container-state'>{state}</h4>
        <div className='testomonials__body-card-container-rating flex'>
          <Stars starsGiven={starsGiven} />
        </div>

        <p className='testomonials__body-card-container-text'>{text}</p>
      </div>
    </div>
  );
}
