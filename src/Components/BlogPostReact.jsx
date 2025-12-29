const BlogPostReact = () => {
  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <article className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-extrabold mb-4">
          Getting Started with React
        </h1>

        <p className="text-gray-400 text-sm mb-8">
          Published: April 2025 · 6 min read
        </p>

        <p className="mb-6 text-lg leading-relaxed text-gray-300">
          React is a powerful JavaScript library used to build fast, interactive,
          and scalable user interfaces. It allows developers to create reusable
          UI components and efficiently update the DOM when application data
          changes.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          ⚙️ Setting Up a React Project
        </h2>

        <p className="mb-4 text-gray-300">
          The easiest way to start a modern React project is by using
          <span className="text-white font-semibold"> Vite</span>. It offers
          lightning-fast builds and a simple configuration.
        </p>

        <pre className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
          <code>npm create vite@latest my-app --template react</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          🧩 Understanding Components
        </h2>

        <p className="mb-4 text-gray-300">
          Components are the building blocks of a React application. A component
          is simply a JavaScript function that returns JSX.
        </p>

        <pre className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
          <code>{`function Welcome() {
  return <h1>Hello, World!</h1>;
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          🧠 Props and State
        </h2>

        <p className="mb-4 text-gray-300">
          <strong>Props</strong> allow you to pass data between components,
          while <strong>State</strong> manages data that changes over time inside
          a component.
        </p>

        <pre className="bg-gray-800 p-4 rounded-lg mb-6 overflow-x-auto text-sm">
          <code>{`const [count, setCount] = useState(0);`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-10 mb-3">
          🚀 What Should You Learn Next?
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>React Router for navigation</li>
          <li>Context API for global state</li>
          <li>Tailwind CSS for styling</li>
          <li>Framer Motion for animations</li>
        </ul>

        <p className="mt-10 italic text-gray-400">
          Happy coding! 😊
        </p>

      </article>
    </section>
  );
};

export default BlogPostReact;

