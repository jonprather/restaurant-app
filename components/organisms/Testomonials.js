import Image from "next/image";
import Stars from "../molecules/Stars";
const text1 = (
  <>
    <span class=''>“</span>Him rendered may attended concerns jennings reserved
    now. <span class='font-bold capitalize color-primary'>Sympathize </span>
    did now preference unpleasing mrs few. Mrs for{" "}
    <span class='font-bold capitalize color-primary'>hour game</span> room want
    are fond dare. For detract charmed add talking age. Shy{" "}
    <span class='font-bold capitalize color-primary'>
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
    <span class='font-bold capitalize color-primary'>delight cousins </span> we
    feeling minutes. Genius has looked end piqued spring. Down has rose feel
    find man. Learning day desirous informed expenses material returned six the.
    She <span class='font-bold capitalize color-primary'>enabled </span>
    invited exposed him another.{" "}
    <span class='font-bold capitalize color-primary'>
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
      <section class='testomonials container'>
        <div class='popular-products-heading-container'>
          <h2 class='popular-products-heading-container-subheading heading-small--black'>
            Testomonials
          </h2>
          <h1 class='heading heading-3'>What They're Saying</h1>
          {/* {{-- <div class="testomonials__shape "><svg width="186" height="23" viewBox="0 0 186 23" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1.95825 22C16.352 14.9191 117.179 -13.9102 184.944 10.8728" stroke="#EA0000" stroke-width="2"
                    stroke-linecap="round" />
            </svg>
        </div> --}} */}
          <div class='testomonials__body'>
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
    <div class='testomonials__body-card '>
      <div class='testomonials__body-card-image'>
        <Image
          height={75}
          width={75}
          alt='customer-review avatar'
          src={imageURL}
        />
      </div>
      <div class=' testomonials__body-card-container'>
        <h3 class='testomonials__body-card-container-name'>{name}</h3>
        <h4 class='testomonials__body-card-container-state'>{state}</h4>
        <div class='testomonials__body-card-container-rating flex'>
          <Stars starsGiven={starsGiven} />
        </div>

        <p class='testomonials__body-card-container-text'>{text}</p>
      </div>
    </div>
  );
}
