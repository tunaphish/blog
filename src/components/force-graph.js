import { navigate } from "gatsby"
import ForceGraph from 'force-graph';

export default class Graph {
  containerEl;
  props;
  visualization;

  constructor(containerEl, props, data) {
    this.containerEl = containerEl;
    this.props = props;

    this.visualization = ForceGraph()(containerEl)
      .graphData(data)
      .height(300)
      .width(300)
      .nodeLabel("id")
      .linkDirectionalParticles(2)
      .linkDirectionalParticleSpeed(0.005)
      .nodeColor(() => "#d1dce5")
      .linkColor(() => "#d1dce5")
      .onNodeClick((node, event) => {
        navigate(`constellation/${node.slug}`)
      });
  }
} 