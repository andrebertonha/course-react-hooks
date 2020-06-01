const React = (function(){
  let _val;
  return {
    render(Component) {
      const Comp = Component();
      Comp.render();
      return Comp;
    },
    useState(init) {
      _val = _val || init; 

      function setState(newVal) {
        _val = newVal;
      }

      return [_val, setState];

    }
  }
})();

function AgeComp() {
  const [age, setAge] = React.useState(21)
  return {
    render() {
      console.log(age)
    },
    ageUp() {
      setAge(age + 1)
    }
  }
}

let App;

App = React.render(AgeComp);
App.ageUp();
React.render(AgeComp);