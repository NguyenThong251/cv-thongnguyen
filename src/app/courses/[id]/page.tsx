'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '@/src/components/CourseDetail/Section';
// import ContactButton from '@/src/components/CourseDetail/ContactButton';


gsap.registerPlugin(ScrollTrigger);

const courseDetails = {
  id: 1,
  title: "Web Development Fundamentals",
  description: "Learn HTML, CSS, and JavaScript Pro 2025",
  stages: [
    {
      title: "Giai đoạn 1: Cơ bản về Web Development",
      content: [
        "Mục tiêu: Hiểu rõ nguyên lý hoạt động của web, nắm vững kiến thức cơ bản về HTML, CSS, và JavaScript.",
        "Giới thiệu về Web Development",
        "Cách thức hoạt động của web (client-server, HTTP/HTTPS).",
        "Các công cụ cần thiết: trình duyệt, code editor (VS Code), DevTools.",
        "HTML Cơ bản: Cấu trúc một tài liệu HTML, các thẻ cơ bản, form và semantic HTML.",
        "CSS Cơ bản: Cú pháp CSS, box model, các thuộc tính cơ bản, position, và Flexbox.",
        "JavaScript Cơ bản: Giới thiệu về JavaScript, biến, kiểu dữ liệu, cấu trúc điều khiển, hàm, DOM, và sự kiện."
      ]
    },
    {
      title: "Giai đoạn 2: Nâng cao kiến thức HTML, CSS, JavaScript",
      content: [
        "Mục tiêu: Nắm vững các kỹ thuật nâng cao để xây dựng giao diện web đẹp và tương tác.",
        "Grid layout: tạo layout phức tạp với display: grid.",
        "Responsive design: media queries, mobile-first approach.Animation và transition: tạo hiệu ứng chuyển động.",
        "Custom properties (CSS variables).Làm việc với mảng và object.",
        "ES6+ features: arrow functions, template literals, destructuring, spread/rest operator.",
        "Asynchronous JavaScript: callbacks, promises, async/await.",
        "Fetch API: gửi và nhận dữ liệu từ server.Local Storage và Session Storage.",
        "Giới thiệu về SCSS và lợi ích.Cú pháp cơ bản: variables, nesting, mixins, extends.",
        "Import và modular CSS. Sử dụng SCSS trong dự án thực tế."
      ]
    },  {
        "title": "Giai đoạn 3: Framework và Thư viện",
        "content": [
          "Mục tiêu: Sử dụng các framework và thư viện để tăng tốc độ phát triển và tối ưu hóa code.",
          "Bootstrap: Giới thiệu về Bootstrap và cách sử dụng.",
          "Grid system, utilities, components (navbar, buttons, cards, modals).",
          "Tùy chỉnh Bootstrap với SCSS.",
          "Tailwind CSS: Giới thiệu về Tailwind CSS và utility-first approach.",
          "Cách cài đặt và sử dụng.",
          "Tạo layout và components với Tailwind.",
          "Tùy chỉnh cấu hình Tailwind.",
          "JavaScript Frameworks/Libraries (Optional).",
          "Các libraries hỗ trợ.",
          "Giới thiệu về React, Vue, hoặc Angular (có thể dạy sau nếu muốn đi sâu vào front-end)."
        ]
      },
      {
        "title": "Giai đoạn 4: Thiết kế và Prototyping với Figma",
        "content": [
          "Mục tiêu: Hiểu quy trình thiết kế giao diện và chuyển đổi từ design sang code.",
          "Giới thiệu về Figma: Công cụ và giao diện Figma.",
          "Tạo và quản lý các frames, components.",
          "Thiết kế giao diện web.",
          "Nguyên tắc thiết kế: typography, color theory, spacing.",
          "Tạo wireframe và prototype.",
          "Thiết kế responsive.",
          "Chuyển đổi từ Figma sang code.",
          "Xuất assets (hình ảnh, icons).",
          "Sử dụng CSS từ thiết kế Figma."
        ]
      },
      {
        "title": "Giai đoạn 5: Nâng cao và Mở rộng",
        "content": [
          "JavaScript Nâng cao.",
          "ES6+ advanced features: modules, classes, iterators/generators.",
          "Firebase.",
          "Web APIs: Geolocation, Canvas, Web Storage.",
          "CSS Frameworks khác: Materialize CSS, Foundation, Bulma.",
          "Version Control với Git.",
          "Cơ bản về Git: commit, branch, merge.",
          "Làm việc với GitHub/GitLab.",
          "Tối ưu hóa và Testing.",
          "Testing cơ bản với Jest hoặc Cypress.",
          "Tối ưu hóa hình ảnh và code."
        ]
      },
      {
        "title": "Giai đoạn 6: Dự án thực tế",
        "content": [
          "Mục tiêu: Áp dụng kiến thức vào dự án thực tế.",
          "Xây dựng dự án hoàn chỉnh.",
          "Lên ý tưởng cho dự án.",
          "Phân tích yêu cầu và thiết kế giao diện.",
          "Triển khai code với HTML, CSS, JavaScript.",
          "Sử dụng SCSS, Bootstrap/Tailwind để tối ưu hóa.",
          "Deploy và Hosting.",
          "Giới thiệu về GitHub Pages, Netlify, Vercel.",
          "Cách deploy một website tĩnh."
        ]
      }
  ],
  rules: [
    "Tham gia đầy đủ các buổi học.",
    "Hoàn thành bài tập đúng hạn.",
    "Tích cực tham gia thảo luận và hỏi đáp.",
    "Tuân thủ quy định của khóa học."
  ]
};

export default function CourseDetail() {
  const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".panel");
//     const tween = gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 0.1,
//         end: "+=3000"
//       }
//     });

//     return () => {
//       tween.kill();
//     };
//   }, []);
useEffect(() => {
    const sections = gsap.utils.toArray(".panel");
    const ctx = gsap.context(() => {
      const tween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".course-container",
          pin: true,
          scrub: 1,
        //   snap: 1 / (sections.length - 1),
         end: "+=3000"
        }
      });
  
      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    });
  
    return () => ctx.revert();
  }, []);
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-r  from-[#1e1e2f] to-[#2a2a40] text-white overflow-hidden">
      <div className="course-container mx-auto px-4 py-20">
        {/* <h1 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#42d392] to-[#647eff]">
          {courseDetails.title}
        </h1>
        <p className="text-xl text-center mb-12">{courseDetails.description}</p> */}

        <div className="flex w-[700%] z-20">
          {courseDetails.stages.map((stage, index) => (
            <Section key={index} title={stage.title} content={stage.content} />
          ))}
        </div>
{/* 
        <div className="mt-20 flex justify-center flex-col items-center">
          <h2 className="text-3xl font-bold mb-8">Quy chế khóa học</h2>
          
          <ul className="list-disc pl-5 space-y-4 text-center">
            {courseDetails.rules.map((rule, index) => (
              <li key={index} className="text-lg">{rule}</li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex justify-center">
          <ContactButton />
        </div> */}
      </div>
    </div>
  );
}