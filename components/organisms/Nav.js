import React from "react";
import { NavModal } from "@/components/organisms/navModal";
export default function Nav() {
  return (
    <nav role='navigation' className='nav'>
      <div class='nav-brand'>
        <span>
          <a href='/'>
            <svg
              width='114'
              height='35'
              viewBox='0 0 114 35'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.712 34.208H3.2L6.912 26.016L0.223999 12.256H4.992L9.184 21.472L13.056 12.256H17.6L7.712 34.208Z'
                fill='#2A333E'
              />
              <path
                d='M18.7495 23.712C18.7495 22.368 19.1868 21.2907 20.0615 20.48C20.9362 19.6693 22.0668 19.1573 23.4535 18.944L27.3255 18.368C28.1148 18.2613 28.5095 17.888 28.5095 17.248C28.5095 16.6507 28.2748 16.16 27.8055 15.776C27.3575 15.392 26.7068 15.2 25.8535 15.2C24.9575 15.2 24.2428 15.4453 23.7095 15.936C23.1975 16.4267 22.9095 17.0347 22.8455 17.76L19.0695 16.96C19.2188 15.5947 19.8908 14.3893 21.0855 13.344C22.2802 12.2987 23.8588 11.776 25.8215 11.776C28.1682 11.776 29.8962 12.3413 31.0055 13.472C32.1148 14.5813 32.6695 16.0107 32.6695 17.76V25.504C32.6695 26.4427 32.7335 27.2747 32.8615 28H28.9575C28.8508 27.5307 28.7975 26.9013 28.7975 26.112C27.7948 27.6693 26.2482 28.448 24.1575 28.448C22.5362 28.448 21.2242 27.9787 20.2215 27.04C19.2402 26.1013 18.7495 24.992 18.7495 23.712ZM25.0535 25.28C26.0562 25.28 26.8775 25.0027 27.5175 24.448C28.1788 23.872 28.5095 22.9333 28.5095 21.632V20.928L24.9575 21.472C23.6562 21.664 23.0055 22.3253 23.0055 23.456C23.0055 23.968 23.1868 24.4053 23.5495 24.768C23.9122 25.1093 24.4135 25.28 25.0535 25.28Z'
                fill='#2A333E'
              />
              <path
                d='M41.2155 18.944V28H36.9595V12.256H41.0875V14.208C41.5355 13.44 42.1755 12.8533 43.0075 12.448C43.8395 12.0427 44.7142 11.84 45.6315 11.84C47.4875 11.84 48.8955 12.4267 49.8555 13.6C50.8368 14.752 51.3275 16.2453 51.3275 18.08V28H47.0715V18.816C47.0715 17.8773 46.8262 17.12 46.3355 16.544C45.8662 15.968 45.1408 15.68 44.1595 15.68C43.2635 15.68 42.5488 15.9893 42.0155 16.608C41.4822 17.2267 41.2155 18.0053 41.2155 18.944Z'
                fill='#2A333E'
              />
              <path
                d='M59.903 18.944V28H55.647V12.256H59.775V14.208C60.223 13.44 60.863 12.8533 61.695 12.448C62.527 12.0427 63.4017 11.84 64.319 11.84C66.175 11.84 67.583 12.4267 68.543 13.6C69.5243 14.752 70.015 16.2453 70.015 18.08V28H65.759V18.816C65.759 17.8773 65.5137 17.12 65.023 16.544C64.5537 15.968 63.8283 15.68 62.847 15.68C61.951 15.68 61.2363 15.9893 60.703 16.608C60.1697 17.2267 59.903 18.0053 59.903 18.944Z'
                fill='#2A333E'
              />
              <path
                d='M73.3745 23.712C73.3745 22.368 73.8118 21.2907 74.6865 20.48C75.5612 19.6693 76.6918 19.1573 78.0785 18.944L81.9505 18.368C82.7398 18.2613 83.1345 17.888 83.1345 17.248C83.1345 16.6507 82.8998 16.16 82.4305 15.776C81.9825 15.392 81.3318 15.2 80.4785 15.2C79.5825 15.2 78.8678 15.4453 78.3345 15.936C77.8225 16.4267 77.5345 17.0347 77.4705 17.76L73.6945 16.96C73.8438 15.5947 74.5158 14.3893 75.7105 13.344C76.9052 12.2987 78.4838 11.776 80.4465 11.776C82.7932 11.776 84.5212 12.3413 85.6305 13.472C86.7398 14.5813 87.2945 16.0107 87.2945 17.76V25.504C87.2945 26.4427 87.3585 27.2747 87.4865 28H83.5825C83.4758 27.5307 83.4225 26.9013 83.4225 26.112C82.4198 27.6693 80.8732 28.448 78.7825 28.448C77.1612 28.448 75.8492 27.9787 74.8465 27.04C73.8652 26.1013 73.3745 24.992 73.3745 23.712ZM79.6785 25.28C80.6812 25.28 81.5025 25.0027 82.1425 24.448C82.8038 23.872 83.1345 22.9333 83.1345 21.632V20.928L79.5825 21.472C78.2812 21.664 77.6305 22.3253 77.6305 23.456C77.6305 23.968 77.8118 24.4053 78.1745 24.768C78.5372 25.1093 79.0385 25.28 79.6785 25.28Z'
                fill='#2A333E'
              />
              <path d='M95.8405 28H91.5845V4.832H95.8405V28Z' fill='#2A333E' />
              <path
                d='M103.128 1.848H100.356V9H98.916V1.848H96.156V0.492004H103.128V1.848Z'
                fill='#2A333E'
              />
              <path
                d='M113.669 9H112.241V2.736L109.589 9H108.341L105.713 2.76V9H104.309V0.492004H106.229L108.989 6.984L111.713 0.492004H113.669V9Z'
                fill='#2A333E'
              />
            </svg>
          </a>
        </span>
      </div>
      <div class='nav-menu'>
        <span>
          <a href='/menu'>Menu</a>
        </span>
        <span>
          {" "}
          <a href='#popular-products'>Our Specials</a>{" "}
        </span>
        <span>
          <a href='#about'> About Us </a>{" "}
        </span>
        <span>
          <a href='#footer'>Our Locations</a>
        </span>{" "}
      </div>
      <div class='nav-icons'>
        <i>
          <svg
            width='19'
            height='19'
            viewBox='0 0 19 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M15.8723 14.8116C17.1996 13.2436 18 11.2153 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.2153 18 13.2436 17.1996 14.8116 15.8723L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L15.8723 14.8116ZM16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z'
              fill='#2A333E'
            />
          </svg>
        </i>
        {/* TODO make these Next Links */}
        <a href='/cart'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M5.69865 7L10.0973 2.78467C11.161 1.7653 12.839 1.7653 13.9027 2.78467L18.3013 7H20.847C21.4555 7 21.923 7.53899 21.8369 8.14142L20.368 18.4243C20.1568 19.9022 18.8911 21 17.3981 21H6.6019C5.10895 21 3.84318 19.9022 3.63205 18.4243L2.16307 8.14142C2.07701 7.53899 2.54447 7 3.15302 7H5.69865ZM11.1351 3.86766C11.6186 3.4043 12.3814 3.4043 12.8649 3.86766L16.1334 7H7.86658L11.1351 3.86766ZM3.72952 8.5L5.11697 18.2121C5.22254 18.9511 5.85542 19.5 6.6019 19.5H17.3981C18.1446 19.5 18.7775 18.9511 18.883 18.2121L20.2705 8.5H3.72952Z'
              fill='#2A333E'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M8 11.25C8.41421 11.25 8.75 11.5858 8.75 12V16C8.75 16.4142 8.41421 16.75 8 16.75C7.58579 16.75 7.25 16.4142 7.25 16V12C7.25 11.5858 7.58579 11.25 8 11.25Z'
              fill='#2A333E'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z'
              fill='#2A333E'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12V16C16.75 16.4142 16.4142 16.75 16 16.75C15.5858 16.75 15.25 16.4142 15.25 16V12C15.25 11.5858 15.5858 11.25 16 11.25Z'
              fill='#2A333E'
            />
          </svg>
        </a>
        <i>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
              fill='#2A333E'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M9 15.75C6.65279 15.75 4.75 17.6528 4.75 20V21C4.75 21.4142 4.41421 21.75 4 21.75C3.58579 21.75 3.25 21.4142 3.25 21V20C3.25 16.8244 5.82436 14.25 9 14.25H15C18.1756 14.25 20.75 16.8244 20.75 20V21C20.75 21.4142 20.4142 21.75 20 21.75C19.5858 21.75 19.25 21.4142 19.25 21V20C19.25 17.6528 17.3472 15.75 15 15.75H9Z'
              fill='#2A333E'
            />
          </svg>
        </i>
      </div>
      <NavModal>
        <div
          className='nav__dropdown nav-hamburger  nav-hamburger-menu'
          role='navigation'
          aria-label='Toggle Open'
        >
          <span>
            <a href='/menu'>Menu</a>
          </span>
          <span>
            <a href='#popular-products'>Our Specials</a>
          </span>
          <span>
            <a href='#about'> About Us </a>
          </span>
          <span>
            <a href='#footer'>Our Locations</a>
          </span>
          <a href='/cart'>
            {/* <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M5.69865 7L10.0973 2.78467C11.161 1.7653 12.839 1.7653 13.9027 2.78467L18.3013 7H20.847C21.4555 7 21.923 7.53899 21.8369 8.14142L20.368 18.4243C20.1568 19.9022 18.8911 21 17.3981 21H6.6019C5.10895 21 3.84318 19.9022 3.63205 18.4243L2.16307 8.14142C2.07701 7.53899 2.54447 7 3.15302 7H5.69865ZM11.1351 3.86766C11.6186 3.4043 12.3814 3.4043 12.8649 3.86766L16.1334 7H7.86658L11.1351 3.86766ZM3.72952 8.5L5.11697 18.2121C5.22254 18.9511 5.85542 19.5 6.6019 19.5H17.3981C18.1446 19.5 18.7775 18.9511 18.883 18.2121L20.2705 8.5H3.72952Z'
                fill='#fff'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M8 11.25C8.41421 11.25 8.75 11.5858 8.75 12V16C8.75 16.4142 8.41421 16.75 8 16.75C7.58579 16.75 7.25 16.4142 7.25 16V12C7.25 11.5858 7.58579 11.25 8 11.25Z'
                fill='#fff'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z'
                fill='#fff'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M16 11.25C16.4142 11.25 16.75 11.5858 16.75 12V16C16.75 16.4142 16.4142 16.75 16 16.75C15.5858 16.75 15.25 16.4142 15.25 16V12C15.25 11.5858 15.5858 11.25 16 11.25Z'
                fill='#fff'
              />
            </svg> */}
            Cart
          </a>
        </div>
      </NavModal>
    </nav>
  );
}
