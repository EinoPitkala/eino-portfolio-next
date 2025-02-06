import Card from "@/components/Card";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Contacts = () => {
  return (
    <main className="bg-zinc-900 text-stone-300">
      <div className="min-h-screen px-4 flex flex-col pt-20 text-center content-center">
        <div className="min-h-[200px]">
          <h1 className="text-6xl font-bold p-0 gradient-text ">
            Links and contact
          </h1>
          <div className="flex justify-center px-4 sm:px-24 mt-4 gap-4 flex-wrap">
            <Card>
              <FontAwesomeIcon icon={faGithub} className=" text-3xl" />
              <h2 className="text-2xl font-bold font-sans py-2">Github</h2>
              <p className="text-lg mb-4">Projects, code and more</p>
              <Button href="https://github.com/EinoPitkala">EinoPitkala</Button>
            </Card>
            <Card>
              <FontAwesomeIcon icon={faTwitter} className=" text-3xl" />
              <h2 className="text-2xl font-bold font-sans py-2">Twitter/X</h2>
              <p className="text-lg mb-4">Random retweets mainly.</p>
              <Button href="https://twitter.com/EinoPitkala">
                @EinoPitkala
              </Button>
            </Card>
            <Card>
              <FontAwesomeIcon icon={faEnvelope} className=" text-3xl" />
              <h2 className="text-2xl font-bold font-sans py-2">eMail</h2>
              <p className="text-lg mb-4">eMail me</p>
              <Button href="mailto:eino@pitkala.net">eino@pitkala.net</Button>
            </Card>
            <Card>
              <FontAwesomeIcon icon={faLaptopCode} className=" text-3xl" />
              <h2 className="text-2xl font-bold font-sans py-2">Eino IT</h2>
              <p className="text-lg mb-4">
                My business. Running alone as an entrepreneur
              </p>
              <Button href="https://eino-it.fi">Website</Button>
            </Card>
            <Card>
              <FontAwesomeIcon icon={faLinkedin} className=" text-3xl" />
              <h2 className="text-2xl font-bold font-sans py-2">LinkedIn</h2>
              <p className="text-lg mb-4">
                My LinkedIn profile. Not that active there.
              </p>
              <Button href="https://www.linkedin.com/in/eino-pitkala/">LinkedIn</Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contacts;
