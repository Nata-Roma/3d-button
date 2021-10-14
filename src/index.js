import "./styles.css";

const btnChild = document.createElement("div");
btnChild.classList.add("btn-child");

const btnText = document.createElement("div");
btnText.textContent = "Button";

btnText.classList.add("btn-text");

const btnUnder = document.createElement("div");
btnUnder.classList.add("btn-under");

const button = document.createElement("button");
button.classList.add("button");

button.onmousemove = (e) => {
  button.style.setProperty(
    "--left",
    100 - (e.offsetX / button.clientWidth) * 100 + "%"
  );
  button.style.setProperty(
    "--top",
    100 - (e.offsetY / button.clientHeight) * 100 + "%"
  );
  button.style.transform = `rotateY(${
    (e.offsetX / button.clientWidth - 0.5) * 10
  }deg) rotateX(${(e.offsetY / button.clientHeight - 0.5) * -20}deg)`;
  btnChild.style.transform = `rotateY(${
    (e.offsetX / button.clientWidth - 0.5) * 10
  }deg) rotateX(${
    (e.offsetY / button.clientHeight - 0.5) * -20
  }deg) translateZ(50px)`;
  btnChild.style.setProperty(
    "--left",
    100 -
      ((e.offsetX - (button.clientWidth - btnChild.clientWidth) * 0.5) /
        btnChild.clientWidth) *
        100 +
      "%"
  );
  btnChild.style.setProperty(
    "--top",
    100 -
      ((e.offsetY - (button.clientHeight - btnChild.clientHeight) * 0.5) /
        btnChild.clientHeight) *
        100 +
      "%"
  );
  btnUnder.style.transform = `translate(${
    (e.offsetX / button.clientWidth - 0.5) * -35
  }px, ${(e.offsetY / button.clientHeight - 0.5) * -20}px )`;
  btnText.style.transform = `rotateY(${
    (e.offsetX / button.clientWidth - 0.5) * 10
  }deg) rotateX(${
    (e.offsetY / button.clientHeight - 0.5) * -20
  }deg) translateZ(100px)`;
};

document.body.append(btnUnder);
document.body.append(button);
document.body.append(btnChild);
document.body.append(btnText);
