import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
function Arena() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className="Arena">
      <h2 className="tw-text-center">Arena</h2>
      <div className="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-6 tw-mt-6">
        <div className="tw-col-span-1">
          <div className="card-container">
            <div className="card-background">
              
              <div id="particles-js">
                <div className="character-image">
                  <div className="image">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1741575/test-character.png" />
                  </div>
                </div>

                <div className="character-information">
                  <h2 className="name">Quang Trung</h2>
                  <div className="description">
                    <div className="description-text">
                      <p style={{ color: "Pink", fontWeight: "bold" }}>
                        Legendary
                      </p>
                      <p>Unique character model</p>
                      <p>Battlepass season 5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Arena.layout = "default";

export default Arena;
