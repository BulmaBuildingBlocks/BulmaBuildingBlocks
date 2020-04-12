import { EditableImageProps } from '~/components/wiziwig/image/types';

class Model {
  title = 'Bulma Building Blocks';

  paragraphs = `<p>
                Continually leverage other's state of the art imperatives before orthogonal experiences. Completely
                administrate highly efficient sources via go forward customer service. Appropriately parallel task
                high-quality "outside the box" thinking through bleeding-edge systems. Globally revolutionize
                collaborative bandwidth via B2C intellectual capital.
              </p>
              <p>
                Enthusiastically exploit multimedia based web-readiness whereas scalable quality vectors. Objectively
                morph professional models through focused niches. Authoritatively impact collaborative interfaces before
                distributed leadership.
              </p>`;

  image: EditableImageProps = {
    src: require(`~/assets/images/Scene Wireframe Background.svg`),
    alt: ''
  };
}

export default Model;
