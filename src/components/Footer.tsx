const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary-foreground/80">
          &copy; {new Date().getFullYear()} Thank you for scrolling down here
        </p>
      </div>
    </footer>
  );
};

export default Footer;