export default function SketchfabEmbed() {
  const sketchfabEmbedUrl =
    'https://sketchfab.com/models/6c248ce8de5246de90b45fee4857aa98/embed?autostart=1&ui_controls=0&ui_infos=0&ui_stop=1&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_fadein=0'

  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="relative h-full w-full max-w-4xl aspect-[4/3] overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl">
        <style>{`
          .model-clipping-container {
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
          }

          .clippable-iframe {
            position: absolute;
            bottom: -50px;
            left: 0;
            width: 100%;
            height: calc(100% + 100px);
            top: -50px;
            border: 0;
          }

          .clippable-iframe::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100px;
            height: 100px;
            background: #000;
            z-index: 10;
          }
        `}</style>

        <div className="model-clipping-container">
          <iframe
            title="The Minion - Uchiha Itachi"
            src={sketchfabEmbedUrl}
            className="clippable-iframe"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            execution-while-out-of-viewport
            execution-while-not-rendered
            web-share
          />
        </div>
      </div>
    </div>
  )
}
