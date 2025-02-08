import Course from '@/src/components/Course';
// import Link from 'next/link';

export default function CoursePage() {
//   const courses = [
//     { id: 1, title: 'Next.js Basics' },
//     { id: 2, title: 'Advanced React' },
//     { id: 3, title: 'TypeScript Fundamentals' },
//   ];

  return (
    <div>
      {/* <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/course/${course.id}`}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul> */}
      <Course/>
    </div>
  );
}