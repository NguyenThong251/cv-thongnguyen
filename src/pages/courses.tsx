import { NextPage } from 'next';
import Header from '../components/Header';
import Course from '../components/Course';
import Footer from '../components/Footer';


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
