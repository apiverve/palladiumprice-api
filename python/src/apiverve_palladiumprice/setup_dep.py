from setuptools import setup, find_packages

setup(
    name='apiverve_palladiumprice',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Palladium Price tracks real-time spot rates for palladium per ounce, gram, and kilogram in USD. It supplies 24-hour price changes and update timestamps, while paid plans add custom currencies and 24-hour hourly history.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/palladiumprice?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
