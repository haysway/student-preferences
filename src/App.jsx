import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // Name preference
  const [name, setName] = useLocalStorage("studentName", "");

  // Favorite language preference
  const [language, setLanguage] = useLocalStorage("favoriteLanguage", "JavaScript");

  // Dark mode preference
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  // CUSTOM font size preference
  const [displayPreferences, setDisplayPreferences] = useLocalStorage("displayPreferences", { fontSize: 16 });

  const formSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Saved Preferences:", {
      name,
      language,
      darkMode,
      displayPreferences,
    });

    alert("Preferences saved!");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <h1>Student Preferences</h1>

      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="language">Favorite Programming Language</label>
          <select
            id="language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </select>
        </div>

        <div className="form-control checkbox-control">
          <label htmlFor="darkMode">Dark Mode</label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={(event) => setDarkMode(event.target.checked)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="fontSize">Preferred Font Size</label>
          <select
            id="fontSize"
            value={displayPreferences.fontSize}
            onChange={(event) => setDisplayPreferences({...displayPreferences, fontSize: Number(event.target.value),})}
          >
            <option value={14}>(14px)</option>
            <option value={16}>(16px)</option>
            <option value={20}>(20px)</option>
            <option value={24}>(24px)</option>
          </select>
        </div>

        <button type="submit">Save Preferences</button>
      </form>

      <div className="preferences">
        <h2>Current Preferences</h2>
        <p>
          <strong>Name:</strong> {name || "Not set"}
        </p>
        <p>
          <strong>Favorite Language:</strong> {language}
        </p>
        <p>
          <strong>Dark Mode:</strong> {darkMode ? "On" : "Off"}
        </p>
        <p>
          <strong>Font Size: </strong> {displayPreferences.fontSize}px
        </p>
      </div>
    </div>
  );
}

export default App;