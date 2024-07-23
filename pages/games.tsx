import Image from "next/image";
export default function commentsid() {
  return (
    <>
      {[1, 2, 3, 4].map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="image" width={200} height={200} />
        </div>
      ))}
    </>
  );
}
