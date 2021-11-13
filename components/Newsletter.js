export default function Newsletter() {
  return (
    <section class='newsletter'>
      <div class='newsletter-container'>
        <h1 class='newsletter__header'>Get special Discounts</h1>
        <p class='newsletter__paragraph'>
          Input email address and complete your subscription to get our special
          offer.
        </p>

        <div class='newsletter__input-container'>
          <label
            class='newsletter__input-container-label'
            for='newsletter'
          ></label>
          <input
            class='newsletter__input-container-input'
            autofill='true'
            type='email'
            placeholder='shakir260@gmail.com'
          />
          <button type='submit' class='newsletter__input-container-button'>
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
