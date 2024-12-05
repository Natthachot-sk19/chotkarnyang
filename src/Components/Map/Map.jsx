

function Map() {
  return (
    <div className="w-full h-full flex justify-center ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.14298611401495!2d100.50933721251444!3d14.817180380888802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e1f8c05279467b%3A0xacff8d644ab37ae7!2z4Lij4LmJ4Liy4LiZ4Lil4LmJ4Lit4LiV4Liy4LmC4LiK4LiV4Li04LiB4Liy4Lij4Lii4Liy4LiHIOC4peC5ieC4reC5geC4oeC5iuC4geC4i-C5jCDguJfguYjguLLguKfguLjguYnguIc!5e0!3m2!1sen!2sth!4v1724769442808!5m2!1sen!2sth"
        className="w-[350px] h-[200px] mt-5 md:w-full md:h-full"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
