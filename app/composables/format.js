export default function useFormat() {
    function currency(
        value,
        minimumFractionDigits = 0,
        maximumFractionDigits = 2,
        currency = 'EUR',
        locale = 'en-US'
    ) {
        const number = Number(value);

        if (!Number.isFinite(number)) {
            return '—';
        }

        const isInteger = Number.isInteger(number);

        const minFD = isInteger
            ? minimumFractionDigits
            : Math.max(2, minimumFractionDigits);

        const maxFD = Math.max(minFD, maximumFractionDigits);

        try {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
                minimumFractionDigits: minFD,
                maximumFractionDigits: maxFD
            }).format(number);
        } catch {
            return `${number.toFixed(maxFD)} ${currency}`;
        }
    }

    function number(number, noSuffix = false) {
        let formattedNumber;

        if (noSuffix) {
            return new Intl.NumberFormat('fr-FR').format(Math.floor(number));
        }

        switch (true) {
            case number < 1000000:
                formattedNumber = new Intl.NumberFormat('fr-FR').format(Math.floor(number));

                break;
            case number < 1000000000:
                formattedNumber = new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 1,
                    minimumFractionDigits: 1
                }).format(Math.floor(number) / 1000000) + ' M';

                break;
            case number < 1000000000000:
                formattedNumber = new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 1,
                    minimumFractionDigits: 1
                }).format(Math.floor(number) / 1000000000) + ' B';

                break;
            default:
                formattedNumber = new Intl.NumberFormat('fr-FR').format(Math.floor(number));

                break;
        }

        return formattedNumber;
    }

    return {
        currency,
        number
    };
}
