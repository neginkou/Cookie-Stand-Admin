export default function Footer(props) {
    return (
      <footer className="mt-auto">
        <div className="flex items-center h-12 pt-8 pb-8 pl-4 bg-green-500">
          <p>&copy; { new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }