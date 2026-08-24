import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type ContactLocationProps = {
  eyebrow: string;
  title: string;
  description: string;

  address: {
    label: string;
    value: string;
  };

  phone: {
    label: string;
    value: string;
    href: string;
  };

  email: {
    label: string;
    value: string;
    href: string;
  };

  officeHours: {
    label: string;
    value: string;
  };

  map: {
    latitude: number;
    longitude: number;
    embedUrl: string;
  };

  mapTitle: string;
  mapHeading: string;
  mapDescription: string;
};


export function ContactLocation({
  eyebrow,
  title,
  description,
  address,
  phone,
  email,
  officeHours,
  map,
  mapTitle,
  mapHeading,
  mapDescription,
}: ContactLocationProps) {

  return (
    <section
      aria-labelledby="contact-location-heading"
      className="bg-slate-50"
    >

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">


        {/* Heading */}

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            {eyebrow}
          </p>


          <h2
            id="contact-location-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl"
          >
            {title}
          </h2>


          <p className="mt-4 text-base leading-7 text-slate-600">
            {description}
          </p>

        </div>



        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">


          {/* Contact details */}

          <div className="rounded-2xl border bg-white p-6 sm:p-8">

            <div className="space-y-7">


              {/* Address */}

              <div className="flex gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <MapPin
                    className="size-5 text-red-700"
                    aria-hidden="true"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-red-700">
                    {address.label}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {address.value}
                  </p>

                </div>

              </div>



              {/* Phone */}

              <div className="flex gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <Phone
                    className="size-5 text-red-700"
                    aria-hidden="true"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-red-700">
                    {phone.label}
                  </p>


                  <a
                    href={phone.href}
                    className="mt-1 block text-sm text-slate-600 transition-colors hover:text-slate-950"
                  >
                    {phone.value}
                  </a>

                </div>

              </div>




              {/* Email */}

              <div className="flex gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <Mail
                    className="size-5 text-red-700"
                    aria-hidden="true"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-red-700">
                    {email.label}
                  </p>


                  <a
                    href={email.href}
                    className="mt-1 block break-all text-sm text-slate-600 hover:text-slate-950"
                  >
                    {email.value}
                  </a>

                </div>

              </div>





              {/* Office hours */}

              <div className="flex gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">

                  <Clock3
                    className="size-5 text-red-700"
                    aria-hidden="true"
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold text-red-700">
                    {officeHours.label}
                  </p>


                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {officeHours.value}
                  </p>

                </div>

              </div>


            </div>

          </div>





          {/* Map */}

          <div className="min-h-[360px] overflow-hidden rounded-2xl border bg-slate-200">


            {map.embedUrl ? (

              <iframe

                src={map.embedUrl}

                title={mapTitle}

                className="h-full min-h-[360px] w-full border-0"

                loading="lazy"

                referrerPolicy="no-referrer-when-downgrade"

              />

            ) : (


              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center">

                <div>


                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">

                    <MapPin
                      className="size-6"
                      aria-hidden="true"
                    />

                  </div>


                  <p className="mt-4 font-semibold text-slate-900">

                    {mapHeading}

                  </p>


                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">

                    {mapDescription}

                  </p>


                </div>

              </div>

            )}


          </div>



        </div>


      </div>

    </section>
  );
}