let timer = null;

function ClickHandler(onClick, onDblClick, data) {
  const WAIT = 400;

  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      onDblClick(data);
      return;
    }

    timer = setTimeout(() => {
      onClick(data);
      timer = null;
    }, WAIT);
  };
}

export default ClickHandler;