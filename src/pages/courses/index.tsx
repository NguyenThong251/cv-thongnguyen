import Course from '@/src/components/Course';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import { NextPage } from 'next';



const CoursesPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-20"> {/* Add padding-top to account for fixed header */}
          <Course />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
