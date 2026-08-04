/**
 * GrainPhoto — shows the original photo as-is (no pixelation, no
 * distortion), with a subtle animated film-grain overlay and a soft
 * vignette for a premium, editorial finish.
 */
export default function GrainPhoto({ src, alt = "", className = "" }) {
  return (
    <div className={`grain-photo rounded-xl ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}
