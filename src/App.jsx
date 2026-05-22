import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [habits, setHabits] = useState([]);

  // 🌟 Emoji function
  const getEmoji = (text) => {
    if (text.toLowerCase().includes("water")) return "💧";
    if (text.toLowerCase().includes("study")) return "📚";
    if (text.toLowerCase().includes("exercise")) return "🏃‍♀️";
    if (text.toLowerCase().includes("sleep")) return "😴";
    return "🌟";
  };

  // ➕ Add habit
  const addHabit = () => {
    if (input.trim() === "") return;

    const newHabit = {
      id: Date.now(),
      text: input,
      completed: false,
      emoji: getEmoji(input),
    };

    setHabits([...habits, newHabit]);
    setInput("");
  };

  // ✔ Toggle complete
  const toggleComplete = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  // ❌ Delete habit
  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  // 📊 Progress
  const completed = habits.filter((h) => h.completed).length;
  const total = habits.length;
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div style={styles.container}>
      <h1>⭐ Habit Tracker</h1>

      {/* INPUT */}
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a habit..."
          style={styles.input}
        />
        <button onClick={addHabit} style={styles.button}>
          Add Habit
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${progress}%` }} />
      </div>

      <p>
        Completed: {completed} / {total}
      </p>

      {/* LIST */}
      {habits.length === 0 ? (
        <p>No habits yet 🚀</p>
      ) : (
        <ul style={styles.list}>
          {habits.map((habit) => (
            <li key={habit.id} style={styles.item}>
              <span
                onClick={() => toggleComplete(habit.id)}
                style={{
                  textDecoration: habit.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                {habit.emoji} {habit.text}
              </span>

              <button
                onClick={() => deleteHabit(habit.id)}
                style={styles.delete}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 🎨 STYLES (COLORFUL BACKGROUND HERE)
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #74ebd5, #ACB6E5)", // 🌈 COLORFUL BG
    color: "#fff",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    borderRadius: "8px",
    border: "none",
  },
  button: {
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px auto",
    width: "300px",
    padding: "10px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.2)",
  },
  delete: {
    background: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "rgba(255,255,255,0.3)",
    marginTop: "20px",
    borderRadius: "10px",
  },
  progress: {
    height: "10px",
    background: "#00ff99",
    borderRadius: "10px",
  },
};