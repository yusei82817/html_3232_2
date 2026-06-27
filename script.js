async function main() {
    const pyodide = await loadPyodide();

    const code = await fetch("python/main.py")
        .then(response => response.text());

    await pyodide.runPythonAsync(code);

    const result = pyodide.runPython("greet()");

    document.getElementById("result").innerText = result;
}

main();

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    alert("Hello world! my name is nio!");
});
