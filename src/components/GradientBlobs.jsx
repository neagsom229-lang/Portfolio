/**
 * Purely decorative, slow-drifting blurred gradient shapes used to add
 * ambient motion behind section content. Marked aria-hidden since they
 * carry no information.
 */
export default function GradientBlobs() {
  return (
    <div className="gradient-blobs" aria-hidden="true">
      <span className="blob blob-1"></span>
      <span className="blob blob-2"></span>
      <span className="blob blob-3"></span>
    </div>
  );
}
