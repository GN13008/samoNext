interface Props {
  imgLink: string;
  body: string;
  href: string;
}

const SponsorCard = ({ href, imgLink, body }: Props) => {
  return (
    <a className="" href={href}>
      <div className="w-24 lg:w-60">
        <div className="">
          <img
            src={imgLink}
            alt={body}
            className="rounded-md h-20 w-20 lg:h-40 lg:w-40"
          />
        </div>
        <p className="">{body}</p>
      </div>
    </a>
  );
};

export default SponsorCard;
