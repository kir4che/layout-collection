import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Hero1 from "@/assets/hot-spring-hotel/hero-1.jpg";
import Hero2 from "@/assets/hot-spring-hotel/hero-2.jpg";
import Hero3 from "@/assets/hot-spring-hotel/hero-3.jpg";
import Hero4 from "@/assets/hot-spring-hotel/hero-4.jpg";
import Hero5 from "@/assets/hot-spring-hotel/hero-5.jpg";
import Hero6 from "@/assets/hot-spring-hotel/hero-6.jpg";
import Hero7 from "@/assets/hot-spring-hotel/hero-7.jpg";
import Hero8 from "@/assets/hot-spring-hotel/hero-8.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './styles.css';

const HotSpringHotel = () => (
  <>
    {/* Sidebar */}
    <div className='fixed left-0 top-0 z-50 h-full w-[16vw] px-10 py-12'>
      <Link to='/layouts/playliving-izu-clone' className=''>
        <img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-105x52_36c6ff69-e6bc-4f5b-8ac9-835a5aed06cc.svg" alt="playliving-izu-logo" />
      </Link>
      <nav className='ml-[2.5vw] mt-48'>
        <ul>
          <li>
            <Link to='#Room' className='text-xs leading-6 font-Montserrat hover:opacity-80'>Room</Link>
          </li>
          <li>
            <Link to='#Experience' className='text-xs leading-6 font-Montserrat hover:opacity-80'>Experience</Link>
          </li>
          <li>
            <Link to='#Food' className='text-xs leading-6 font-Montserrat hover:opacity-80'>Food</Link>
          </li>
          <li>
            <Link to='#Access' className='text-xs leading-6 font-Montserrat hover:opacity-80'>Access</Link>
          </li>
          <li>
            <Link to='#Reserve' target='_blank' className='text-xs leading-6 font-Montserrat hover:opacity-80'>Reserve</Link>
          </li>
          <li className='mt-3'>
            <Link to='#'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path fill="#000000" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m48-136H80a54.06 54.06 0 0 0-54 54v96a54.06 54.06 0 0 0 54 54h96a54.06 54.06 0 0 0 54-54V80a54.06 54.06 0 0 0-54-54m42 150a42 42 0 0 1-42 42H80a42 42 0 0 1-42-42V80a42 42 0 0 1 42-42h96a42 42 0 0 1 42 42ZM190 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10"></path></svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    {/* Banner */}
    <div className="slider-container relative mb-28 ml-auto w-[84vw]">
      <div className='absolute z-50 space-y-3 tracking-widest text-white bottom-16 right-20'>
        <h1 className='text-3xl leading-12'>家的感覺，<br />深入人心的溫泉酒店</h1>
        <p className='text-sm leading-8'>坐落在俯瞰大海的山丘上，位於大海和森林之間。<br />帶有溫泉的私人酒店「PLAYLIVING IZU」</p>
      </div>
      <Slider {...{
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        cssEase: "linear",
        arrows: false
      }}>
        {[Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8].map((image, index) => (
          <img key={index} className='h-[94vh] rounded-bl-[60px] object-bottom contrast-[.8]' src={image} alt={`hero-${index}`} />
        ))}
      </Slider>
    </div >
    {/* About */}
    <div className='relative mb-48 ml-[6vw] flex justify-end'>
      <div className='w-[28vw] pt-40'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-988x1544_v-fms_webp_4e5a7199-b034-4c6b-9f25-ff6825875c00_middle.webp" alt="" /></div>
      <p className='pl-36 pr-[35vw] pt-16 leading-8'>
        只需要短短幾天的時間，<br />
        與親朋好友一同度過，<br />
        溫馨放鬆的美好時光。<br />
        <br />
        享用美味佳餚，<br />
        放聲大笑、暢所欲言而不受拘束。<br />
        感受美景的動人之處，<br />
        欣賞音樂或電影等傑作。<br />
        自由自在、心曠神怡的氛圍你我共享。<br />
        <br />
        大自然的陽光灑落下來，<br />
        透過窗戶遠眺大海，<br />
        與志同道合的朋友們無拘無束地共度時光。<br />
        <br />
        位於都市中心附近的伊豆高原，<br />
        有著大海和森林的美景，<br />
        我們在此打造了一棟溫泉酒店。<br />
        <br />
        這裡，讓您感受到家的溫暖，<br />
        歡迎來到 PLAYLIVING IZU。
      </p>
      <div className='absolute right-0 top-0 w-[28vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-802x500_v-fs_webp_c531ab55-14d9-484a-85e6-19fb19f4348f_small.webp" alt="" /></div>
    </div>
    {/* Video */}
    <div className='relative mb-80 ml-[16vw] mr-[10vw]'>
      <iframe src="https://player.vimeo.com/video/821346811" width="100%" height='479px' />
    </div>
    {/* Room */}
    <div className='w-full mb-20 space-y-10'>
      <div className='ml-auto text-right w-fit pr-36'>
        <h2 id='Room' className='text-5xl leading-snug font-EBGaramond'>Room</h2>
        <p className='text-sm leading-8'>
          空間寬敞通透，挑高空間與大片落地窗<br />
          源源不絕的天然溫泉水源，富含珍貴的礦物質<br />
          盡情徜徉在大自然的氛圍中
        </p>
        <Link to="#" className='inline-flex items-center w-40 gap-2 py-3 hr_hover-rtl text-nowrap font-EBGaramond hover:opacity-80'>
          <hr className='w-full duration-300 border-neutral-600' />
          View More
        </Link>
      </div>
      <div className="slider-container">
        <Slider {...{
          infinite: true,
          slidesToShow: 3.2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 500,
          cssEase: "linear",
        }}>
          <img src={Hero7} className='h-[451px] object-bottom' />
          <img src={Hero2} className='h-[451px] object-bottom' />
          <img src={Hero5} className='h-[451px] object-bottom' />
          <img src={Hero6} className='h-[451px] object-bottom' />
        </Slider>
      </div>
    </div>
    {/* Experience */}
    <div className='-mb-20 ml-[16vw]'>
      <div className='py-32 pl-8' >
        <h2 id='Experience' className='text-5xl leading-normal font-EBGaramond'>Experience</h2>
        <p className='text-sm leading-8'>無論戶外或室內都能隨心所欲、盡情享受<br />滿足您不同時刻的心情需求</p>
        <Link to="#" className='inline-flex items-center w-40 gap-2 py-3 hr_hover-rtl text-nowrap font-EBGaramond hover:opacity-80'>
          <hr className='w-full duration-300 border-neutral-600' />
          View More
        </Link>
      </div>
      <div className='-mb-24 -mt-44 ml-auto w-[46vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-1332x808_v-fms_webp_3c60e066-0e44-463b-bf09-4be0ba505bea_middle.webp" alt="" /></div>
      <div className='w-[25vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-712x1256_v-fms_webp_ce80a178-922b-4cda-b04b-a7b0cde3b0ae_middle.webp" alt="" /></div>
    </div>
    {/* Food */}
    <div className='w-full mb-48 space-y-20'>
      <div className='ml-auto text-right w-fit pr-36'>
        <h2 id='Food' className='text-5xl leading-snug font-EBGaramond'>Food</h2>
        <p className='text-sm leading-8'>設有氣體燒烤爐，以及在地當季食材餐盒<br />盡情享受野外烹飪的樂趣</p>
        <Link to="#" className='inline-flex items-center w-40 gap-2 py-3 hr_hover-rtl text-nowrap font-EBGaramond hover:opacity-80'>
          <hr className='w-full duration-300 border-neutral-600' />
          View More
        </Link>
      </div>
      <div className='ml-auto w-[70vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-2044x996_v-frms_webp_2358aadd-77d4-4116-888a-25c9491bb231_regular.webp" alt="" /></div>
    </div>
    {/* Images */}
    <div className='mb-28 ml-[16vw] mr-[10vw] flex items-center justify-between'>
      <div className='w-[30vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-856x1192_v-fs_webp_1e138d19-3606-4204-8060-95131bc6ab1f.webp" alt="" /></div>
      <div className='w-[30vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-2400x1500_v-frms_webp_a1008bb6-83ec-442a-ad53-17b3068f9450_small.webp" alt="" /></div>
    </div>
    {/* Access */}
    <div className='mb-48 ml-[16vw]'>
      <div className='py-32 pl-8' >
        <h2 id='Access' className='text-5xl leading-snug font-EBGaramond'>Access</h2>
        <p className='text-sm leading-8'>無論從關東、關西均可輕鬆到達<br />共享美好時光</p>
        <Link to="#" className='inline-flex items-center w-40 gap-2 py-3 hr_hover-rtl text-nowrap font-EBGaramond hover:opacity-80'>
          <hr className='w-full duration-300 border-neutral-600' />
          View More
        </Link>
      </div>
      <div className='-mb-24 -mt-44 ml-auto w-[46vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-1332x1041_v-fms_webp_73f30c1e-36f1-42c2-856a-b2a6acf8e925_middle.webp" alt="" /></div>
      <div className='w-[25vw]'><img src="https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-2400x1715_v-frms_webp_ff0f9707-2dc6-4bf4-bcf3-0c385e6f5aac_small.webp" alt="" /></div>
    </div>
    {/* Reserve */}
    <div className='ml-[16vw] mr-[10vw]'>
      <Link to='#' className='duration-300 cursor-pointer hr_hover-rtl hover:opacity-75'>
        <div className='bg-[url("https://storage.googleapis.com/studio-design-asset-files/projects/4Ra49QPLWD/s-2102x806_v-frms_webp_f21a8b68-dabc-4e6d-b8fa-ab0f97a80f81.webp")] bg-cover bg-center bg-no-repeat py-32 pl-24 text-white' >
          <h2 id='Reserve' className='text-5xl leading-snug font-EBGaramond'>Reserve</h2>
          <p className='text-sm leading-8'>點擊查看價格、空房情況並進行預訂</p>
          <p className='inline-flex items-center w-40 gap-2 py-3 hr_hover-rtl text-nowrap font-EBGaramond hover:opacity-80'>
            <hr className='w-full duration-300 border-white' />
            View More
          </p>
        </div>
      </Link>
      <ul className='flex items-center mt-8 mb-16 space-x-8'>
        <li className='w-1/3'>
          <button type='button' className='w-full py-6 border border-solid rounded-md border-neutral-600 hover:bg-neutral-100'>注意事項</button>
        </li>
        <li className='w-1/3'>
          <button type='button' className='w-full py-6 border border-solid rounded-md border-neutral-600 hover:bg-neutral-100'>全館設施</button>
        </li>
        <li className='w-1/3'>
          <button type='button' className='w-full py-6 border border-solid rounded-md border-neutral-600 hover:bg-neutral-100'>住宿條款</button>
        </li>
      </ul>
    </div >
    {/* Footer */}
    <footer className='ml-[16vw] mr-[10vw] flex justify-between border-t border-solid border-neutral-300 py-16' >
      <div className='space-y-4'>
        <div className='space-x-3 text-sm'>
          <Link to='#' className='inline-block px-6 py-3 border border-solid rounded-md border-neutral-600 hover:bg-neutral-100'>即時預訂</Link>
          <Link to='#' className='inline-block px-6 py-3 border border-solid rounded-md border-neutral-600 hover:bg-neutral-100'>聯繫我們</Link>
        </div>
        <Link to='#' className='inline-block text-xs leading-6 underline hover:no-underline'>Privacy Policy</Link>
      </div>
      <div className='space-y-3 text-right'>
        <h2 className='text-sm leading-6'>
          050-1807-0085
          <br />
          靜岡縣伊東市富戶 925-23 <Link to='#' className='underline'>MAP</Link>
        </h2>
        <p className='text-xs leading-6'>入住時間：16:00〜24:00<br />退房時間：12:00</p>
      </div>
    </footer>
  </>
);

export default HotSpringHotel;