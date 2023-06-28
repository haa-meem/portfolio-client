const DownloadResume = () => {
  const handleDownload = () => {
    window.open("https://drive.google.com/u/1/uc?id=14HSwS3Ocp5YEJ0dsQ80HDPQkE575lP9l&export=download","_parent")
  };

  return (
    <button className="btn btn-outline btn-primary" onClick={handleDownload}>
      Download Resume
    </button>
  );
};

export default DownloadResume;
