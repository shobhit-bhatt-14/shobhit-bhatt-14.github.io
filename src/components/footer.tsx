import ProfileLinks from "./profile-links";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
      <ProfileLinks />
      <p className="mt-6 text-sm">
        &copy; {new Date().getFullYear()} Shobhit Bhatt. All rights reserved.
      </p>
    </footer>
  );
}
